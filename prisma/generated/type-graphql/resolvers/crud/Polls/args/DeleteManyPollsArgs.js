"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPollsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsWhereInput_1 = require("../../../inputs/PollsWhereInput");
let DeleteManyPollsArgs = class DeleteManyPollsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereInput_1.PollsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsWhereInput_1.PollsWhereInput)
], DeleteManyPollsArgs.prototype, "where", void 0);
DeleteManyPollsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPollsArgs);
exports.DeleteManyPollsArgs = DeleteManyPollsArgs;
