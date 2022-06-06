"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsCreateManyInput_1 = require("../../../inputs/ShopsCreateManyInput");
let CreateManyShopsArgs = class CreateManyShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ShopsCreateManyInput_1.ShopsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyShopsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyShopsArgs.prototype, "skipDuplicates", void 0);
CreateManyShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyShopsArgs);
exports.CreateManyShopsArgs = CreateManyShopsArgs;
