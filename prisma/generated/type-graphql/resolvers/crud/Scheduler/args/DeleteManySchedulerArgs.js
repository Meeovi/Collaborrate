"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySchedulerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerWhereInput_1 = require("../../../inputs/SchedulerWhereInput");
let DeleteManySchedulerArgs = class DeleteManySchedulerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerWhereInput_1.SchedulerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerWhereInput_1.SchedulerWhereInput)
], DeleteManySchedulerArgs.prototype, "where", void 0);
DeleteManySchedulerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySchedulerArgs);
exports.DeleteManySchedulerArgs = DeleteManySchedulerArgs;
