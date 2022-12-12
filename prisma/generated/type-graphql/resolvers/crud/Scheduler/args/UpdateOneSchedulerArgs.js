"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSchedulerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerUpdateInput_1 = require("../../../inputs/SchedulerUpdateInput");
const SchedulerWhereUniqueInput_1 = require("../../../inputs/SchedulerWhereUniqueInput");
let UpdateOneSchedulerArgs = class UpdateOneSchedulerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerUpdateInput_1.SchedulerUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchedulerUpdateInput_1.SchedulerUpdateInput)
], UpdateOneSchedulerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerWhereUniqueInput_1.SchedulerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchedulerWhereUniqueInput_1.SchedulerWhereUniqueInput)
], UpdateOneSchedulerArgs.prototype, "where", void 0);
UpdateOneSchedulerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSchedulerArgs);
exports.UpdateOneSchedulerArgs = UpdateOneSchedulerArgs;
