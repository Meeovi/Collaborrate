"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPollsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsUpdateManyMutationInput_1 = require("../../../inputs/PollsUpdateManyMutationInput");
const PollsWhereInput_1 = require("../../../inputs/PollsWhereInput");
let UpdateManyPollsArgs = class UpdateManyPollsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsUpdateManyMutationInput_1.PollsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PollsUpdateManyMutationInput_1.PollsUpdateManyMutationInput)
], UpdateManyPollsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereInput_1.PollsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsWhereInput_1.PollsWhereInput)
], UpdateManyPollsArgs.prototype, "where", void 0);
UpdateManyPollsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPollsArgs);
exports.UpdateManyPollsArgs = UpdateManyPollsArgs;
