import bcrypt from "bcrypt";
import { prisma } from "../../libs/prismaDB";
import { NextResponse } from "next/server";
// import { useRouter } from 'next/navigation';


export async function POST(request) {
  // const router = useRouter();

  const body = await request.json();
  const { nickname, email, userClass } = body;

  if (!nickname || !email || !userClass) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  // if (exist) {
  //   throw new Error("Email already exists");
  // }

  let user;

  if (exist) {
    user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        nickname,
        userClass,
        // You don't need to update the email if it's already used to find the user
      },
    });
    // Additional logic here (e.g., response handling)

  } else {
    // Handle case where user does not exist
    user = await prisma.user.create({
      data: {
        nickname,
        userClass,
        email,
      },
    });
  }
  // router.push('/');

  return NextResponse.json(user);
}
