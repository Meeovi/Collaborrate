"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsCreateManyInput_1 = require("../../../inputs/FullfillmentsCreateManyInput");
let CreateManyFullfillmentsArgs = class CreateManyFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FullfillmentsCreateManyInput_1.FullfillmentsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyFullfillmentsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyFullfillmentsArgs.prototype, "skipDuplicates", void 0);
CreateManyFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyFullfillmentsArgs);
exports.CreateManyFullfillmentsArgs = CreateManyFullfillmentsArgs;
