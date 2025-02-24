module.exports = {
    'open chrome browser': function (browser) {
browser
   .url('https://dev2.lcp.neartekpod.io')
   .windowMaximize()
   .useXpath()
   .setValue("//input[@name='username']",'sathya.boopathy@neartekpod.com')
   .setValue("//input[@id='password']",'Qwerty@123')
   .click("//button[@type='submit']")
   .click("//span[@class='absolute right-0 h-full w-full rotate-45']")
   //click attendance
   .click("//a[text()='Attendance']")
   //click myleave
   .click("//button[text()='My Leaves']")
   .pause(3000)
   //click apply leave
   .click("//button[text()=' Apply Leave']")
   .pause(3000)
   //click date
   .click("//input[@type='date']")
   .pause(3000)
   //mention date
   .setValue("(//input[@class='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'])[1]",'02-04-2025')
   .pause(3000)
   .setValue("(//input[@class='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'])[2]",'02-05-2025')
   .pause(3000)
    //select leave
   .click("//input[@placeholder='Select Leave Type']")
   .pause(3000)
   //select LOP leave
   .click("//li[text()='LOP']")
   //send fever reason
   .setValue("//textarea[@class='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary']",'Suffering from fever')
   .pause(3000)
   //click save
   .click("//button[text()='Apply Leave']")
   .pause(3000)
   .ensure.alertIsPresent() // Wait for the alert to be present
   .alerts.accept()
   //apply sick leave 
   .click("//button[text()=' Apply Leave']")
   //.click("//button[text()=' Apply Leave']")
   .pause(3000)
   //click date
   .click("//input[@type='date']")
   //mention date
   .setValue("(//input[@class='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'])[1]",'02-08-2025')
   .pause(3000)
   .setValue("(//input[@class='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'])[2]",'02-09-2025')
   .pause(3000)
    //select leave
   .click("//input[@placeholder='Select Leave Type']")
   .pause(3000)
    //select sick leave
    .click("//li[text()='Sick Leave']")
   //send fever reason
   .setValue("//textarea[@class='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary']",'Suffering from Stomach pain')
   .pause(3000)
   //click save
   .click("//button[text()='Apply Leave']")
   .pause(3000)
   .ensure.alertIsPresent() // Wait for the alert to be present
   .refresh()
   .click("//a[text()='Attendance']")
    //Click manage task
   .click("//button[text()='Manager Tasks']")
   .pause(3000)
   //.click(("//button[text()='X']")
   .click("//button[text()='✓']")
   .click("//button[text()='Admin Tasks']")
   .setValue("(//input[@type='text'])[2]",'132')
   .pause(3000)
   .click("//button[text()='View Report']")
   .click("//button[text()='Download PDF']")
   .pause(3000)
   .ensure.alertIsPresent()
   .alerts.accept()
   .click("//button[text()='Cancel']")
   .pause()
   //.click()


   



}

}