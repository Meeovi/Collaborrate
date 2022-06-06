"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryCreateInput_1 = require("../../../inputs/GlossaryCreateInput");
const GlossaryUpdateInput_1 = require("../../../inputs/GlossaryUpdateInput");
const GlossaryWhereUniqueInput_1 = require("../../../inputs/GlossaryWhereUniqueInput");
let UpsertGlossaryArgs = class UpsertGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput)
], UpsertGlossaryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryCreateInput_1.GlossaryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryCreateInput_1.GlossaryCreateInput)
], UpsertGlossaryArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryUpdateInput_1.GlossaryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryUpdateInput_1.GlossaryUpdateInput)
], UpsertGlossaryArgs.prototype, "update", void 0);
UpsertGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertGlossaryArgs);
exports.UpsertGlossaryArgs = UpsertGlossaryArgs;
