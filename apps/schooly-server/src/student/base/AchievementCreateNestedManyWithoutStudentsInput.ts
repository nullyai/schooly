/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AchievementWhereUniqueInput } from "../../achievement/base/AchievementWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AchievementCreateNestedManyWithoutStudentsInput {
  @Field(() => [AchievementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AchievementWhereUniqueInput],
  })
  connect?: Array<AchievementWhereUniqueInput>;
}

export { AchievementCreateNestedManyWithoutStudentsInput as AchievementCreateNestedManyWithoutStudentsInput };
