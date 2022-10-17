"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryWhereInput_1 = require("../../../inputs/GlossaryWhereInput");
let DeleteManyGlossaryArgs = class DeleteManyGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereInput_1.GlossaryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryWhereInput_1.GlossaryWhereInput)
], DeleteManyGlossaryArgs.prototype, "where", void 0);
DeleteManyGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyGlossaryArgs);
exports.DeleteManyGlossaryArgs = DeleteManyGlossaryArgs;
