"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatesOrderByWithRelationInput_1 = require("../../../inputs/StatesOrderByWithRelationInput");
const StatesWhereInput_1 = require("../../../inputs/StatesWhereInput");
const StatesWhereUniqueInput_1 = require("../../../inputs/StatesWhereUniqueInput");
const StatesScalarFieldEnum_1 = require("../../../../enums/StatesScalarFieldEnum");
let FindFirstStatesArgs = class FindFirstStatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereInput_1.StatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesWhereInput_1.StatesWhereInput)
], FindFirstStatesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatesOrderByWithRelationInput_1.StatesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstStatesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatesWhereUniqueInput_1.StatesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatesWhereUniqueInput_1.StatesWhereUniqueInput)
], FindFirstStatesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstStatesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstStatesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatesScalarFieldEnum_1.StatesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstStatesArgs.prototype, "distinct", void 0);
FindFirstStatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstStatesArgs);
exports.FindFirstStatesArgs = FindFirstStatesArgs;
