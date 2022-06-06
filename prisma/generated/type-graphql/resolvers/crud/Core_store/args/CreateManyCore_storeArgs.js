"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCore_storeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Core_storeCreateManyInput_1 = require("../../../inputs/Core_storeCreateManyInput");
let CreateManyCore_storeArgs = class CreateManyCore_storeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Core_storeCreateManyInput_1.Core_storeCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCore_storeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCore_storeArgs.prototype, "skipDuplicates", void 0);
CreateManyCore_storeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCore_storeArgs);
exports.CreateManyCore_storeArgs = CreateManyCore_storeArgs;
