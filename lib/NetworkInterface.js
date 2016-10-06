//NetworkInterface.js

"NetworkInterfaces": [
{
  "NetworkInterfaceId": "eni-8d19459f",
  "SubnetId": "subnet-acc3c784",
  "VpcId": "vpc-b73ce6d2",
  "Description": "Primary network interface",
  "OwnerId": "119459292316",
  "Status": "in-use",
  "MacAddress": "12:e6:95:ef:b5:0b",
  "PrivateIpAddress": "172.30.0.182",
  "SourceDestCheck": true,
  "Groups": [
    {
      "GroupName": "house (vpc_rule)",
      "GroupId": "sg-3d9efa47"
    }
  ],
  "Attachment": {
    "AttachmentId": "eni-attach-638a6dc9",
    "DeviceIndex": 0,
    "Status": "attached",
    "AttachTime": "2016-10-06T03:39:27.000Z",
    "DeleteOnTermination": true
  },
  "Association": {
    "PublicIp": "54.166.240.143",
    "PublicDnsName": "",
    "IpOwnerId": "amazon"
  },
  "PrivateIpAddresses": [
    {
      "PrivateIpAddress": "172.30.0.182",
      "Primary": true,
      "Association": {
        "PublicIp": "54.166.240.143",
        "PublicDnsName": "",
        "IpOwnerId": "amazon"
      }
    }
  ]
}
],