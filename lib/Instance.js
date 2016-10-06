#!/usr/bin/env node
//Instance.js


// constants & Enums

// private vars
// var status = StateEnum.Unknown;

var instanceId = 
var imageId = 
var state = InstanceState
var privateDnsName = 
var publicDnsName = 
var stateTransitionReason = 
var keyName = 
var amiLaunchIndex = int
var productCodes = [obj] // ?? []
var instanceType = 
var launchTime = 
var placement = Placement //Better name for this plz
var monitoring = Monitor
var subnetId = 
var vpcId = 
var privateIpAddress = 
var publicIpAddress = 
var stateReason = StateReason
var architecture = 
var rootDeviceType = 
var rootDeviceName = 
var blockDeviceMappings = [blockDevice]
var virtualizationType = 
var clientToken =
var tags = [Tag] // just key-value pairs, but stil objs
var securityGroups = [SecurityGroup]
var sourceDestCheck = Bool
var hypervisor = 
var networkInterfaces = [NetworkInterface]
var ebsOptimized = Bool
var enaSupport = Bool



// export object
module.exports = Instance;


// constructor
function Instance(arg) {

}




// functions
Instance.prototype.getSomeDataOrSomething: function(arg1, arg2) {

  return new Promise(function(resolve, reject) {


  }//promise
}//Instance


}//module