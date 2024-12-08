package org.example.blog.service

import org.example.blog.domain.Post
import org.example.blog.repository.PostRepository
import org.springframework.stereotype.Service

@Service
class PostService(private val postRepository: PostRepository) {

    fun getPost(postId: Long): Post {
        return postRepository.findById(postId)
            .orElseThrow {
                IllegalArgumentException("Post not found with ID: $postId")
            }
    }

    fun createPost(post: Post): Post {
        return postRepository.save(post)
    }
}
