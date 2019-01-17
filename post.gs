function doPost() {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
 
  var slackApp = SlackApp.create(token); //SlackApp インスタンスの取得
 
  var options = {
    channelId: "#general", //チャンネル名
    userName: "くま", //投稿するbotの名前
    message: "そうだね", //投稿するメッセージ
    icon_emoji: ":bear:"
  };
 
  return slackApp.postMessage(options.channelId, options.message, {username: options.userName, icon_emoji: options.icon_emoji});
}
