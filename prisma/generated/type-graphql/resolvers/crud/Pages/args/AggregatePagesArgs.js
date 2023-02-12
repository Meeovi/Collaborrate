"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesOrderByWithRelationInput_1 = require("../../../inputs/PagesOrderByWithRelationInput");
const PagesWhereInput_1 = require("../../../inputs/PagesWhereInput");
const PagesWhereUniqueInput_1 = require("../../../inputs/PagesWhereUniqueInput");
let AggregatePagesArgs = class AggregatePagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereInput_1.PagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereInput_1.PagesWhereInput)
], AggregatePagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PagesOrderByWithRelationInput_1.PagesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePagesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereUniqueInput_1.PagesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesWhereUniqueInput_1.PagesWhereUniqueInput)
], AggregatePagesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePagesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePagesArgs.prototype, "skip", void 0);
AggregatePagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePagesArgs);
exports.AggregatePagesArgs = AggregatePagesArgs;
