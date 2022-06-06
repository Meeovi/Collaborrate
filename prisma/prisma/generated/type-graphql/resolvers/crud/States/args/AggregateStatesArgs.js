"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesOrderByWithRelationInput_1 = require("../../../inputs/StatesOrderByWithRelationInput");
const StatesWhereInput_1 = require("../../../inputs/StatesWhereInput");
const StatesWhereUniqueInput_1 = require("../../../inputs/StatesWhereUniqueInput");
let AggregateStatesArgs = class AggregateStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereInput_1.StatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesWhereInput_1.StatesWhereInput)
], AggregateStatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatesOrderByWithRelationInput_1.StatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateStatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereUniqueInput_1.StatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesWhereUniqueInput_1.StatesWhereUniqueInput)
], AggregateStatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateStatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateStatesArgs.prototype, "skip", void 0);
AggregateStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateStatesArgs);
exports.AggregateStatesArgs = AggregateStatesArgs;
