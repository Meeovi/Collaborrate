"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesCreateManyInput_1 = require("../../../inputs/CasesCreateManyInput");
let CreateManyCasesArgs = class CreateManyCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CasesCreateManyInput_1.CasesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCasesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCasesArgs.prototype, "skipDuplicates", void 0);
CreateManyCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCasesArgs);
exports.CreateManyCasesArgs = CreateManyCasesArgs;
