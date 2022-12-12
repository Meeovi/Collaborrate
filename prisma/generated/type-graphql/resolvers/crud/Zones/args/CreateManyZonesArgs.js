"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyZonesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ZonesCreateManyInput_1 = require("../../../inputs/ZonesCreateManyInput");
let CreateManyZonesArgs = class CreateManyZonesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ZonesCreateManyInput_1.ZonesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyZonesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyZonesArgs.prototype, "skipDuplicates", void 0);
CreateManyZonesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyZonesArgs);
exports.CreateManyZonesArgs = CreateManyZonesArgs;
