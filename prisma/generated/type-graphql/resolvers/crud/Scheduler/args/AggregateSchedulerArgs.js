"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSchedulerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SchedulerOrderByWithRelationAndSearchRelevanceInput");
const SchedulerWhereInput_1 = require("../../../inputs/SchedulerWhereInput");
const SchedulerWhereUniqueInput_1 = require("../../../inputs/SchedulerWhereUniqueInput");
let AggregateSchedulerArgs = class AggregateSchedulerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerWhereInput_1.SchedulerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerWhereInput_1.SchedulerWhereInput)
], AggregateSchedulerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchedulerOrderByWithRelationAndSearchRelevanceInput_1.SchedulerOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSchedulerArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerWhereUniqueInput_1.SchedulerWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerWhereUniqueInput_1.SchedulerWhereUniqueInput)
], AggregateSchedulerArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSchedulerArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSchedulerArgs.prototype, "skip", void 0);
AggregateSchedulerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSchedulerArgs);
exports.AggregateSchedulerArgs = AggregateSchedulerArgs;
