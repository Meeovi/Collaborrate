"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSchedulerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchedulerOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SchedulerOrderByWithRelationAndSearchRelevanceInput");
const SchedulerWhereInput_1 = require("../../../inputs/SchedulerWhereInput");
const SchedulerWhereUniqueInput_1 = require("../../../inputs/SchedulerWhereUniqueInput");
const SchedulerScalarFieldEnum_1 = require("../../../../enums/SchedulerScalarFieldEnum");
let FindFirstSchedulerArgs = class FindFirstSchedulerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerWhereInput_1.SchedulerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerWhereInput_1.SchedulerWhereInput)
], FindFirstSchedulerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchedulerOrderByWithRelationAndSearchRelevanceInput_1.SchedulerOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSchedulerArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchedulerWhereUniqueInput_1.SchedulerWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchedulerWhereUniqueInput_1.SchedulerWhereUniqueInput)
], FindFirstSchedulerArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSchedulerArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSchedulerArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SchedulerScalarFieldEnum_1.SchedulerScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSchedulerArgs.prototype, "distinct", void 0);
FindFirstSchedulerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSchedulerArgs);
exports.FindFirstSchedulerArgs = FindFirstSchedulerArgs;
