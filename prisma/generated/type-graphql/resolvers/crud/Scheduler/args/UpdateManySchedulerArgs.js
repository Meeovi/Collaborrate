"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySchedulerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerUpdateManyMutationInput_1 = require("../../../inputs/SchedulerUpdateManyMutationInput");
const SchedulerWhereInput_1 = require("../../../inputs/SchedulerWhereInput");
let UpdateManySchedulerArgs = class UpdateManySchedulerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerUpdateManyMutationInput_1.SchedulerUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchedulerUpdateManyMutationInput_1.SchedulerUpdateManyMutationInput)
], UpdateManySchedulerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerWhereInput_1.SchedulerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerWhereInput_1.SchedulerWhereInput)
], UpdateManySchedulerArgs.prototype, "where", void 0);
UpdateManySchedulerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySchedulerArgs);
exports.UpdateManySchedulerArgs = UpdateManySchedulerArgs;
