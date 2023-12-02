import { useState } from "react";
import { View, Text, Switch } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";

export default function App() {
  const [enable, setenable] = useState(true);
  const [result, setresult] = useState("");
  const [visible, setvisible] = useState(false);
  const Calculate = (title) => {
    try {
      if (title == "c") {
        setresult("");
      } else if (title == "del") {
        setresult(result.substring(0, result.length - 1));
      } else if (title == "=") {
        setresult(eval(result));
      } else {
        setresult(result + title);
      }
    } catch (error) {
      alert("please put a valid statement");
    }
  };
  const Btn = ({ title }) => {
    return (
      <TouchableOpacity
        style={{
          borderRadius: 30,
          margin: 11,
          width: 60,
          height: 60,
          elevation: 11,
          backgroundColor: enable ? "cyan" : "red",
          elevation: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => Calculate(title)}
      >
        <Text
          style={{
            color: enable ? "black" : "white",
            fontWeight: "bold",
            fontSize: 33,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: enable ? "white" : "black",
        alignItems: "center",
      }}
    >
      <Switch
        style={{ flex: 1 }}
        value={enable}
        onValueChange={() => setenable((previousstate) => !previousstate)}
        trackColor={{ true: "black", false: "white" }}
        thumbColor={{ true: "white", false: "black" }}
      ></Switch>
      <Text style={{ color: enable ? "black" : "white" }}>{result}</Text>

      <View style={{ marginRight: 55 }}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Btn title="c"></Btn>
          <Btn title="del"></Btn>
          <Btn title="%"></Btn>
          <Btn title="/"></Btn>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Btn title="7"></Btn>
          <Btn title="8"></Btn>
          <Btn title="9"></Btn>
          <Btn title="*"></Btn>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Btn title="4"></Btn>
          <Btn title="5"></Btn>
          <Btn title="6"></Btn>
          <Btn title="+"></Btn>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Btn title="1"></Btn>
          <Btn title="2"></Btn>
          <Btn title="3"></Btn>
          <Btn title="-"></Btn>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Btn title="00"></Btn>
          <Btn title="0"></Btn>
          <Btn title="."></Btn>
          <Btn title="="></Btn>
        </View>
      </View>

      <Text style={{ color: enable ? "black" : "white" }}>App</Text>
    </View>
  );
}
