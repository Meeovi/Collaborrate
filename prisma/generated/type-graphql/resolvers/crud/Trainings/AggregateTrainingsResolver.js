"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTrainingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTrainingsArgs_1 = require("./args/AggregateTrainingsArgs");
const Trainings_1 = require("../../../models/Trainings");
const AggregateTrainings_1 = require("../../outputs/AggregateTrainings");
const helpers_1 = require("../../../helpers");
let AggregateTrainingsResolver = class AggregateTrainingsResolver {
    async aggregateTrainings(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTrainings_1.AggregateTrainings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTrainingsArgs_1.AggregateTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTrainingsResolver.prototype, "aggregateTrainings", null);
AggregateTrainingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trainings_1.Trainings)
], AggregateTrainingsResolver);
exports.AggregateTrainingsResolver = AggregateTrainingsResolver;
