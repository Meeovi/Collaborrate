"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesOrderByWithRelationInput_1 = require("../../../inputs/StatesOrderByWithRelationInput");
const StatesWhereInput_1 = require("../../../inputs/StatesWhereInput");
const StatesWhereUniqueInput_1 = require("../../../inputs/StatesWhereUniqueInput");
const StatesScalarFieldEnum_1 = require("../../../../enums/StatesScalarFieldEnum");
let FindManyStatesArgs = class FindManyStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereInput_1.StatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesWhereInput_1.StatesWhereInput)
], FindManyStatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatesOrderByWithRelationInput_1.StatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyStatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereUniqueInput_1.StatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesWhereUniqueInput_1.StatesWhereUniqueInput)
], FindManyStatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyStatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyStatesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatesScalarFieldEnum_1.StatesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyStatesArgs.prototype, "distinct", void 0);
FindManyStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyStatesArgs);
exports.FindManyStatesArgs = FindManyStatesArgs;
