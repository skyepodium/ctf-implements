package org.example.blog.controller

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RequestMapping("")
@RestController
class IndexController {
    @RequestMapping("")
    fun index(): String {
        return "index"
    }
}
