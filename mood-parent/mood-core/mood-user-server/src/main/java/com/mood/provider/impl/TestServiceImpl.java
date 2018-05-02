package com.mood.provider.impl;

import com.mood.remote.TestService;

/**
 * 内容
 *
 * @author chaiwei
 * @time 2018/1/9.
 */
public class TestServiceImpl implements TestService {

    @Override
    public String sayHello(String name) {
        return "Hello " + name + "!";
    }

}
