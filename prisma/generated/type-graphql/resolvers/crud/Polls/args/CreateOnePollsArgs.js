"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePollsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsCreateInput_1 = require("../../../inputs/PollsCreateInput");
let CreateOnePollsArgs = class CreateOnePollsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsCreateInput_1.PollsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PollsCreateInput_1.PollsCreateInput)
], CreateOnePollsArgs.prototype, "data", void 0);
CreateOnePollsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOnePollsArgs);
exports.CreateOnePollsArgs = CreateOnePollsArgs;
