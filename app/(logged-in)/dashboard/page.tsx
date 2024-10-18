// import BgGradient from "@/app/components/common/bg-gradient";
// import getDbConnection from "@/lib/db";
// import {
//   doesUserExist,
//   getPlanType,
//   hasCancelledSubscription,
//   updateUser,
// } from "@/lib/user-helpers";
// import { currentUser } from "@clerk/nextjs/server";
// import { Badge } from "lucide-react";

// export default async function Dashboard() {
//   const clerkUser = await currentUser();

//   const email = clerkUser?.emailAddresses?.[0].emailAddress ?? "";

//   const sql = await getDbConnection();

//   //update the user_id
//   let userId = null;
//   let planTypeId = "starter";

//   const hasUserCancelled = await hasCancelledSubscription(sql, email);
//   const user = await doesUserExist(sql, email);

//   if (user) {
//     // update the user_id in user table
//     userId = clerkUser?.id;
//     if (userId) {
//       await updateUser(sql, userId, email);
//     }

//     const priceId = user[0].price_id;
//     const {id,name:planTypeName} = getPlanType(priceId)
//      planTypeId = id
//   }

//   const isBasicPlan = planType === "basic";
//   const isProPlan = planType === "pro";
import BgGradient from "@/app/components/common/bg-gradient";
import { plansMap } from "@/lib/constants";
import getDbConnection from "@/lib/db";
import { hasCancelledSubscription } from "@/lib/user-helpers";
import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard(){
const clerkUser = await currentUser();
const email = clerkUser?.emailAddresses?.[0].emailAddress ?? "";

const sql = await getDbConnection();

//update the user id
let userId = null
let planType = "starter";


const hasUserCancelled = await hasCancelledSubscription(sql,email)

const user = await sql`SELECT * FROM users where email = ${email}`
if(user && user.length >0){
  // update the user_id in user table
  userId = clerkUser?.id;
  await sql`UPDATE users SET user_id = ${userId} WHERE email = ${email}`;

  const priceId = user[0].price_id;
  const checkPlanType = plansMap.filter((plan)=> plan.priceId === priceId);
  planType = checkPlanType?.[0].id || "starter"
}

if(hasUserCancelledQuery && hasUserCancelledQuery.length >0){
  hasUserCancelled = true;
}
console.log({hasUserCancelled});

const isBasicPlan = planType === "basic";
const isProPlan = planType === "pro"

  return (
    <BgGradient>
    </BgGradient>
  );
}


