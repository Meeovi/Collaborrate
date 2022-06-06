"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPollsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsCreateManyInput_1 = require("../../../inputs/PollsCreateManyInput");
let CreateManyPollsArgs = class CreateManyPollsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PollsCreateManyInput_1.PollsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPollsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPollsArgs.prototype, "skipDuplicates", void 0);
CreateManyPollsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPollsArgs);
exports.CreateManyPollsArgs = CreateManyPollsArgs;
