$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/jain.anuj/workspace/openweathermap/src/main/java/com/qa/features/openweather.feature");
formatter.feature({
  "line": 1,
  "name": "Openweather Testing",
  "description": "",
  "id": "openweather-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To Verifies that all important information",
  "description": "",
  "id": "openweather-testing;to-verifies-that-all-important-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the browser and enter the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify the Home page Title",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify the Wheather label is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the Map label is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify the Guide label is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "verify the Price label is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "verify the Partners label is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify the Solutions label is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify the Widgets label is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify the Blog label is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.user_open_the_browser_and_enter_the_URL()"
});
formatter.result({
  "duration": 17995291722,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.verify_the_Home_page_Title()"
});
formatter.result({
  "duration": 97306819,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.verify_the_Wheather_label_is_visible()"
});
formatter.result({
  "duration": 539281,
  "error_message": "java.lang.NullPointerException\r\n\tat com.qa.stepDefinations.HomePageTest.verify_the_Wheather_label_is_visible(HomePageTest.java:31)\r\n\tat ✽.Then verify the Wheather label is visible(C:/Users/jain.anuj/workspace/openweathermap/src/main/java/com/qa/features/openweather.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageTest.verify_the_Map_label_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.verify_the_Guide_label_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.verify_the_Price_label_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.verify_the_Partners_label_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.verify_the_Solutions_label_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.verify_the_Widgets_label_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.verify_the_Blog_label_is_visible()"
});
formatter.result({
  "status": "skipped"
});
});