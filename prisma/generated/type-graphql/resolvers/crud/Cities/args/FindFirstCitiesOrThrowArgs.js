"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCitiesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesOrderByWithRelationInput_1 = require("../../../inputs/CitiesOrderByWithRelationInput");
const CitiesWhereInput_1 = require("../../../inputs/CitiesWhereInput");
const CitiesWhereUniqueInput_1 = require("../../../inputs/CitiesWhereUniqueInput");
const CitiesScalarFieldEnum_1 = require("../../../../enums/CitiesScalarFieldEnum");
let FindFirstCitiesOrThrowArgs = class FindFirstCitiesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereInput_1.CitiesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesWhereInput_1.CitiesWhereInput)
], FindFirstCitiesOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CitiesOrderByWithRelationInput_1.CitiesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCitiesOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereUniqueInput_1.CitiesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesWhereUniqueInput_1.CitiesWhereUniqueInput)
], FindFirstCitiesOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCitiesOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCitiesOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CitiesScalarFieldEnum_1.CitiesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCitiesOrThrowArgs.prototype, "distinct", void 0);
FindFirstCitiesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCitiesOrThrowArgs);
exports.FindFirstCitiesOrThrowArgs = FindFirstCitiesOrThrowArgs;
