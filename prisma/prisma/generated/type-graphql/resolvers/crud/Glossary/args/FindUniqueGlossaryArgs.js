"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryWhereUniqueInput_1 = require("../../../inputs/GlossaryWhereUniqueInput");
let FindUniqueGlossaryArgs = class FindUniqueGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput)
], FindUniqueGlossaryArgs.prototype, "where", void 0);
FindUniqueGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueGlossaryArgs);
exports.FindUniqueGlossaryArgs = FindUniqueGlossaryArgs;
