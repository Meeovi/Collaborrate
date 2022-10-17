"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryCreateInput_1 = require("../../../inputs/GlossaryCreateInput");
let CreateOneGlossaryArgs = class CreateOneGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryCreateInput_1.GlossaryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryCreateInput_1.GlossaryCreateInput)
], CreateOneGlossaryArgs.prototype, "data", void 0);
CreateOneGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneGlossaryArgs);
exports.CreateOneGlossaryArgs = CreateOneGlossaryArgs;
