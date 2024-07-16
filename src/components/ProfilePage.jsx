import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./shadcn-ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcn-ui/avatar";
import { Badge } from "./shadcn-ui/badge";
import { Button } from "./shadcn-ui/button";
import { Separator } from "./shadcn-ui/separator";

const ProfilePage = () => {
  const user = {
    name: "Avin Madhu",
    username: "@avinmadhu",
    bio: "always learning bruh",
    avatar: "https://avinmadhu.me/MyPortfolio/assets/img/me.jpg",
    learning: 2,
    Completed: 1,
    stars: 0
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl font-bold">{user.name}</CardTitle>
              <p className="text-gray-500">{user.username}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">{user.bio}</p>
          <div className="flex space-x-4 mb-4">
            <Badge variant="secondary">{user.learning} Currently Learning</Badge>
            <Badge variant="secondary">{user.Completed} Completed Course</Badge>
            <Badge variant="secondary">{user.stars} Posts</Badge>
          </div>
          <Button className="w-full">Edit Profile</Button>
          
          <Separator className="my-6" />
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">Kerala, India</p>
            </div>
            <div>
              <h3 className="font-semibold">Website</h3>
              <a href="https://janedoe.com" className="text-blue-500 hover:underline">avinmadhu.com</a>
            </div>
            <div>
              <h3 className="font-semibold">Joined</h3>
              <p className="text-gray-600">January 2020</p>
            </div>
            <div>
              <h3 className="font-semibold">Education</h3>
              <p className="text-gray-600">College of Engineering Chengannur</p>
            </div>
            {/* <div>
              <h3 className="font-semibold">Joined</h3>
              <p className="text-gray-600">January 2020</p>
            </div> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;