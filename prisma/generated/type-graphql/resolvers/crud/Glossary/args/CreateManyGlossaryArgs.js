"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryCreateManyInput_1 = require("../../../inputs/GlossaryCreateManyInput");
let CreateManyGlossaryArgs = class CreateManyGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [GlossaryCreateManyInput_1.GlossaryCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyGlossaryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyGlossaryArgs.prototype, "skipDuplicates", void 0);
CreateManyGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyGlossaryArgs);
exports.CreateManyGlossaryArgs = CreateManyGlossaryArgs;
