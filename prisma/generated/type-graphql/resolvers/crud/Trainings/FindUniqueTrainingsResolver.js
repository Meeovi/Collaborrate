"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTrainingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTrainingsArgs_1 = require("./args/FindUniqueTrainingsArgs");
const Trainings_1 = require("../../../models/Trainings");
const helpers_1 = require("../../../helpers");
let FindUniqueTrainingsResolver = class FindUniqueTrainingsResolver {
    async findUniqueTrainings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trainings.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Trainings_1.Trainings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTrainingsArgs_1.FindUniqueTrainingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTrainingsResolver.prototype, "findUniqueTrainings", null);
FindUniqueTrainingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trainings_1.Trainings)
], FindUniqueTrainingsResolver);
exports.FindUniqueTrainingsResolver = FindUniqueTrainingsResolver;
