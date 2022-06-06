"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesOrderByWithRelationInput_1 = require("../../../inputs/CitiesOrderByWithRelationInput");
const CitiesWhereInput_1 = require("../../../inputs/CitiesWhereInput");
const CitiesWhereUniqueInput_1 = require("../../../inputs/CitiesWhereUniqueInput");
let AggregateCitiesArgs = class AggregateCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereInput_1.CitiesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesWhereInput_1.CitiesWhereInput)
], AggregateCitiesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CitiesOrderByWithRelationInput_1.CitiesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCitiesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereUniqueInput_1.CitiesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesWhereUniqueInput_1.CitiesWhereUniqueInput)
], AggregateCitiesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCitiesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCitiesArgs.prototype, "skip", void 0);
AggregateCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCitiesArgs);
exports.AggregateCitiesArgs = AggregateCitiesArgs;
