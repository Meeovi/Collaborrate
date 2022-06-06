"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePollsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsWhereUniqueInput_1 = require("../../../inputs/PollsWhereUniqueInput");
let FindUniquePollsArgs = class FindUniquePollsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereUniqueInput_1.PollsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PollsWhereUniqueInput_1.PollsWhereUniqueInput)
], FindUniquePollsArgs.prototype, "where", void 0);
FindUniquePollsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePollsArgs);
exports.FindUniquePollsArgs = FindUniquePollsArgs;
