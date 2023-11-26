package com.example.blog.service;

import com.example.blog.domain.Post;
import com.example.blog.domain.PostSearchParam;
import com.example.blog.mapper.PostMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class PostService {

    private final PostMapper postMapper;

    public List<Post> getPostsBySearchParam(PostSearchParam postSearchParam) {
        return postMapper.selectPostsBySearchParam(postSearchParam);
    }
}
