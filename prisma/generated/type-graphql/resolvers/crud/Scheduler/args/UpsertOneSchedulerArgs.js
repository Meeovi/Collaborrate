"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSchedulerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerCreateInput_1 = require("../../../inputs/SchedulerCreateInput");
const SchedulerUpdateInput_1 = require("../../../inputs/SchedulerUpdateInput");
const SchedulerWhereUniqueInput_1 = require("../../../inputs/SchedulerWhereUniqueInput");
let UpsertOneSchedulerArgs = class UpsertOneSchedulerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerWhereUniqueInput_1.SchedulerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchedulerWhereUniqueInput_1.SchedulerWhereUniqueInput)
], UpsertOneSchedulerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerCreateInput_1.SchedulerCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchedulerCreateInput_1.SchedulerCreateInput)
], UpsertOneSchedulerArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerUpdateInput_1.SchedulerUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchedulerUpdateInput_1.SchedulerUpdateInput)
], UpsertOneSchedulerArgs.prototype, "update", void 0);
UpsertOneSchedulerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSchedulerArgs);
exports.UpsertOneSchedulerArgs = UpsertOneSchedulerArgs;
