package org.example.blog.controller

import org.example.blog.domain.Post
import org.example.blog.service.PostService
import org.springframework.web.bind.annotation.*

@RequestMapping("/api/v1/post")
@RestController
class PostController(val postService: PostService) {
    @GetMapping("/{postId}")
    fun getPost(@PathVariable postId: Long): Post {
        return postService.getPost(postId)
    }

    @PostMapping("")
    fun createPost(@RequestBody post: Post): Post {
        return postService.createPost(post)
    }
}
