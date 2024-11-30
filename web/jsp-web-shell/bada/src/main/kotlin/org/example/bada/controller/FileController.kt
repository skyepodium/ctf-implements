package org.example.bada.controller
import org.springframework.core.io.ClassPathResource
import org.springframework.core.io.FileSystemResource
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import java.io.File
import java.io.IOException
import java.nio.file.Files

@Controller
class FileController {

    @GetMapping("/")
    fun home(): String {
        return "home"
    }

    @PostMapping("/file")
    fun uploadFile(@RequestParam("file") file: MultipartFile, model: Model): String {
        try {
            val dir = File(FILE_DIRECTORY)

            println("File directory: $dir")
            if (!dir.exists()) {
                dir.mkdirs() // Ensure the directory exists
            }

            val savedFile = File(dir, file.originalFilename.toString())
            file.transferTo(savedFile) // Save the uploaded file
            model.addAttribute("message", "File uploaded successfully.")
        } catch (e: IOException) {
            model.addAttribute("message", "Failed to upload file.")
        }
        return "home"
    }

    @GetMapping("/file")
    fun listAndLinkFiles(model: Model): String {
        val dir = File(FILE_DIRECTORY)

        if (!dir.exists() || dir.listFiles() == null) {
            model.addAttribute("files", emptyList<String>())
            return "files"
        }

        val fileNames: List<String> = dir.listFiles()
            ?.filter { it.isFile }
            ?.map { it.name }
            ?: emptyList()

        model.addAttribute("files", fileNames)
        return "files"
    }

    private val jspPath = "WEB-INF/views/upload/"
    private val staticPath = "src/main/webapp/WEB-INF/views/upload/"

    @GetMapping("/test/{filename}")
    fun handleRequest(@PathVariable filename: String, model: Model): Any {
        // 정적 파일 처리
        val file = File("$FILE_DIRECTORY/$filename")
        if (file.exists()) {
            val contentType = Files.probeContentType(file.toPath()) ?: "application/octet-stream"
            return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, contentType)
                .body(FileSystemResource(file).inputStream.readBytes())
        }

        return "upload/$filename"
    }

    @GetMapping("/webshell")
    fun webshell(): String {
        return "upload/web-shell"
    }

    companion object {
        private val FILE_DIRECTORY = File("src/main/webapp/WEB-INF/views/upload").absolutePath
    }

}