"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryUpdateInput_1 = require("../../../inputs/GlossaryUpdateInput");
const GlossaryWhereUniqueInput_1 = require("../../../inputs/GlossaryWhereUniqueInput");
let UpdateGlossaryArgs = class UpdateGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryUpdateInput_1.GlossaryUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryUpdateInput_1.GlossaryUpdateInput)
], UpdateGlossaryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryWhereUniqueInput_1.GlossaryWhereUniqueInput)
], UpdateGlossaryArgs.prototype, "where", void 0);
UpdateGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateGlossaryArgs);
exports.UpdateGlossaryArgs = UpdateGlossaryArgs;
