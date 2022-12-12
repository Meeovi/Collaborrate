"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSchedulerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerWhereUniqueInput_1 = require("../../../inputs/SchedulerWhereUniqueInput");
let FindUniqueSchedulerArgs = class FindUniqueSchedulerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerWhereUniqueInput_1.SchedulerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchedulerWhereUniqueInput_1.SchedulerWhereUniqueInput)
], FindUniqueSchedulerArgs.prototype, "where", void 0);
FindUniqueSchedulerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSchedulerArgs);
exports.FindUniqueSchedulerArgs = FindUniqueSchedulerArgs;
