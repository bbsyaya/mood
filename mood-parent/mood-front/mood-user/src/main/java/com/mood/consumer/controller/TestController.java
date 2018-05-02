package com.mood.consumer.controller;

import com.alibaba.fastjson.JSONObject;
import com.mood.remote.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 内容
 *
 * @author chaiwei
 * @time 2018/1/10.
 */
@RestController
public class TestController {

    @Autowired
    TestService testService;
    /**
     * 测试 JSON 接口；
     *
     * @param name 名字；
     * @return
     */
    @RequestMapping("/test/{name}")
    public JSONObject testJson(@PathVariable("name") String name) {
        JSONObject jsonObject = new JSONObject();
        String testStr = testService.sayHello(name);
        jsonObject.put("str", testStr);
        return jsonObject;
    }
}
