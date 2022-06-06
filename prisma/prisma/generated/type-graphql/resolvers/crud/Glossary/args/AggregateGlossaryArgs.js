"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryOrderByWithRelationInput_1 = require("../../../inputs/GlossaryOrderByWithRelationInput");
const GlossaryWhereInput_1 = require("../../../inputs/GlossaryWhereInput");
const GlossaryWhereUniqueInput_1 = require("../../../inputs/GlossaryWhereUniqueInput");
let AggregateGlossaryArgs = class AggregateGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereInput_1.GlossaryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryWhereInput_1.GlossaryWhereInput)
], AggregateGlossaryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryOrderByWithRelationInput_1.GlossaryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateGlossaryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput)
], AggregateGlossaryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateGlossaryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateGlossaryArgs.prototype, "skip", void 0);
AggregateGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateGlossaryArgs);
exports.AggregateGlossaryArgs = AggregateGlossaryArgs;
