import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const VoiceSatisfactionCard = () => {
  return (
    <div className="blobYellow flex items-center justify-center">
      <div className="blobYellow flex items-center  justify-center">
        <Card
          color=""
          shadow={false}
          className="w-[300px] h-[200px] flex bg-momo-red pb-1 items-center justify-center px-5 max-w-[26rem] drop-shadow-2xl shadow-black"
        >
          <Card
            color=""
            shadow={false}
            className="w-[300px] h-[200px] flex bg-gray-400  items-center justify-center px-5 max-w-[26rem] drop-shadow-2xl shadow-black"
          >
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-2 pt-0 pb-8"
            >
              <Typography className="text-white text-[13px]">
                &quot;I found solution to all my design needs from Creative Tim.
                I use !!!&quotfound solution to all my design needs ;
              </Typography>
            </CardHeader>
            <CardBody className="mb-6 flex gap-3 justify-center items-center p-0">
              <Avatar
                size="sm"
                variant="circular"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-">
                  <Typography
                    className="text-white"
                    variant="h6"
                    color="blue-gray"
                  >
                    Praveen Prasad
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default VoiceSatisfactionCard;
