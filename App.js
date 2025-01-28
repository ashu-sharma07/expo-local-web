import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={false} />
      <WebView source={{ uri: "https://example.com" }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webview: {
    flex: 1,
  },
});
