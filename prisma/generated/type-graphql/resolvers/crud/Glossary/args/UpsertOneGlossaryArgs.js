"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryCreateInput_1 = require("../../../inputs/GlossaryCreateInput");
const GlossaryUpdateInput_1 = require("../../../inputs/GlossaryUpdateInput");
const GlossaryWhereUniqueInput_1 = require("../../../inputs/GlossaryWhereUniqueInput");
let UpsertOneGlossaryArgs = class UpsertOneGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput)
], UpsertOneGlossaryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryCreateInput_1.GlossaryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryCreateInput_1.GlossaryCreateInput)
], UpsertOneGlossaryArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryUpdateInput_1.GlossaryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryUpdateInput_1.GlossaryUpdateInput)
], UpsertOneGlossaryArgs.prototype, "update", void 0);
UpsertOneGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneGlossaryArgs);
exports.UpsertOneGlossaryArgs = UpsertOneGlossaryArgs;
