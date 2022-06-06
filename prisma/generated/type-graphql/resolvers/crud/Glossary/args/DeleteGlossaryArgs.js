"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryWhereUniqueInput_1 = require("../../../inputs/GlossaryWhereUniqueInput");
let DeleteGlossaryArgs = class DeleteGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput)
], DeleteGlossaryArgs.prototype, "where", void 0);
DeleteGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteGlossaryArgs);
exports.DeleteGlossaryArgs = DeleteGlossaryArgs;
