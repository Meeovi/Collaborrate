"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTrainingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TrainingsCreateManyInput_1 = require("../../../inputs/TrainingsCreateManyInput");
let CreateManyTrainingsArgs = class CreateManyTrainingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TrainingsCreateManyInput_1.TrainingsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTrainingsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTrainingsArgs.prototype, "skipDuplicates", void 0);
CreateManyTrainingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTrainingsArgs);
exports.CreateManyTrainingsArgs = CreateManyTrainingsArgs;
