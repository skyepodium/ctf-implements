package com.example.blog.mapper;

import com.example.blog.domain.Post;
import com.example.blog.domain.PostSearchParam;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PostMapper {

    List<Post> getPosts(@Param("postSearchParam") PostSearchParam postSearchParam);
}
