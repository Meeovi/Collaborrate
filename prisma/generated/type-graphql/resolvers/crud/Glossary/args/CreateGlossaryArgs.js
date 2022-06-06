"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryCreateInput_1 = require("../../../inputs/GlossaryCreateInput");
let CreateGlossaryArgs = class CreateGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryCreateInput_1.GlossaryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryCreateInput_1.GlossaryCreateInput)
], CreateGlossaryArgs.prototype, "data", void 0);
CreateGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateGlossaryArgs);
exports.CreateGlossaryArgs = CreateGlossaryArgs;
